module Tools.Absolute
    exposing
        ( State
        , Config
        , init
        , initWith
        , svg
        , view
        )

import Dict
import Html exposing (Html)
import Html.Attributes as Html
import Html.Events as Html
import Input.Float
import Math.Vector2 exposing (..)
import Svg exposing (Svg)
import Svg.Attributes as Svg
import Svg.Events as Svg
import Css


{- internal -}

import Events
import Svg.Extra as Svg
import Tools.Common exposing (..)
import Types exposing (..)
import SharedStyles
    exposing
        ( ToolbarClass(..)
        , toolbarNamespace
        , class
        )
import View.Colors exposing (..)


styles =
    Css.asPairs >> Html.style



{- state -}


type alias State =
    WithMouse
        { x : Maybe Float
        , y : Maybe Float
        , id : Maybe Id
        }


init : State
init =
    { x = Nothing
    , y = Nothing
    , id = Nothing
    , mouse = Nothing
    }


initWith : Id -> Vec2 -> State
initWith id v =
    { init
        | x = Just (getX v)
        , y = Just (getY v)
        , id = Just id
    }



{- config -}


type alias Config msg =
    { addPoint : Point -> msg
    , updatePoint : Id -> Point -> msg
    , stateUpdated : State -> msg
    , viewPort : ViewPort
    }



{- canvas -}


svg : Config msg -> State -> Svg msg
svg config state =
    Svg.g []
        [ case state.mouse of
            Just position ->
                drawCursor config state position

            Nothing ->
                Svg.g [] []
        , drawLines config state
        , drawNewPoint config state
        , eventRect config state
        ]


drawCursor : Config msg -> State -> Position -> Svg msg
drawCursor config state p =
    case ( state.x, state.y ) of
        ( Just x, Just y ) ->
            Svg.g [] []

        ( Just x, Nothing ) ->
            Svg.g []
                [ Svg.drawPoint (vec2 x (toFloat p.y))
                , Svg.drawSelector (vec2 x (toFloat p.y))
                ]

        ( Nothing, Just y ) ->
            Svg.g []
                [ Svg.drawPoint (vec2 (toFloat p.x) y)
                , Svg.drawSelector (vec2 (toFloat p.x) y)
                ]

        ( Nothing, Nothing ) ->
            Svg.g []
                [ Svg.drawPoint (vec p.x p.y)
                , Svg.drawSelector (vec p.x p.y)
                ]


drawLines : Config msg -> State -> Svg msg
drawLines config state =
    case ( state.x, state.y ) of
        ( Just x, Just y ) ->
            Svg.g [] []

        ( Just x, Nothing ) ->
            Svg.g []
                [ Svg.drawVerticalLine x ]

        ( Nothing, Just y ) ->
            Svg.g []
                [ Svg.drawHorizontalLine y ]

        ( Nothing, Nothing ) ->
            Svg.g [] []


drawNewPoint : Config msg -> State -> Svg msg
drawNewPoint config state =
    case ( state.x, state.y ) of
        ( Just x, Just y ) ->
            Svg.g []
                [ Svg.drawPoint (vec2 x y)
                , Svg.drawSelector (vec2 x y)
                ]

        _ ->
            Svg.g [] []


eventRect : Config msg -> State -> Svg msg
eventRect config state =
    Svg.rect
        [ Svg.x (toString config.viewPort.x)
        , Svg.y (toString config.viewPort.y)
        , Svg.width (toString config.viewPort.width)
        , Svg.height (toString config.viewPort.height)
        , Svg.fill "transparent"
        , Svg.strokeWidth "0"
        , case state.id of
            Just id ->
                Events.onClick (updatePoint config state id)

            Nothing ->
                Events.onClick (addPoint config state)
        , Events.onMove
            (updateMouse config.stateUpdated state config.viewPort << Just)
        , Svg.onMouseOut
            (updateMouse config.stateUpdated state config.viewPort Nothing)
        ]
        []



{- view -}


view : Config msg -> State -> Html msg
view config state =
    let
        row attrs nodes =
            Html.div ([ class [ ToolbarRow ] ] ++ attrs) nodes

        cell attrs nodes =
            Html.div ([ class [ ToolbarColumn ] ] ++ attrs) nodes

        icon name =
            cell
                [ styles
                    [ Css.displayFlex
                    , Css.flexFlow1 Css.row
                    , Css.alignItems Css.center
                    ]
                ]
                [ Html.div
                    [ class [ ToolbarIconButton ] ]
                    [ Html.i
                        [ Html.class "material-icons"
                        , Html.onClick (updateX config.stateUpdated state Nothing)
                        , styles
                            [ Css.fontSize (Css.rem 0.9)
                            , Css.lineHeight (Css.rem 0.9)
                            , Css.position Css.absolute
                            , Css.top (Css.pct 50)
                            , Css.left (Css.pct 50)
                            , Css.transform (Css.translate2 (Css.pct -50) (Css.pct -50))
                            ]
                        ]
                        [ Html.text name ]
                    ]
                ]

        variable { name, input } =
            row []
                [ cell
                    [ styles
                        [ Css.displayFlex
                        , Css.alignItems Css.baseline
                        ]
                    ]
                    [ Html.div
                        [ styles
                            [ Css.fontSize (Css.rem 1)
                            , Css.lineHeight (Css.rem 1)
                            , Css.paddingRight (Css.rem 0.4)
                            ]
                        ]
                        [ Html.text name ]
                    , Html.div
                        []
                        [ input config state [ class [ ToolTextfield ] ] ]
                    ]
                , icon "delete"
                ]
    in
        Html.div
            [ styles
                [ Css.backgroundColor (Css.hex base2)
                , Css.width (Css.rem 10)
                , Css.property "pointer-events" "auto"
                ]
            ]
            [ variable { name = "x =", input = inputX }
            , variable { name = "y =", input = inputY }
            , case state.id of
                Just id ->
                    updateButton [ class [ ToolbarButton ] ] config state id

                Nothing ->
                    addButton [ class [ ToolbarButton ] ] config state
            ]


addButton : List (Html.Attribute msg) -> Config msg -> State -> Html msg
addButton attrs_ config state =
    let
        attrs =
            case ( state.x, state.y ) of
                ( Just x, Just y ) ->
                    let
                        point =
                            absolute (vec2 x y)
                    in
                        [ Html.onClick (config.addPoint point)
                        , Html.disabled False
                        ]

                _ ->
                    [ Html.disabled True ]
    in
        Html.div (attrs_ ++ attrs) [ Html.text "add" ]


updateButton : List (Html.Attribute msg) -> Config msg -> State -> Id -> Html msg
updateButton attrs_ config state id =
    let
        attrs =
            case ( state.x, state.y ) of
                ( Just x, Just y ) ->
                    let
                        point =
                            absolute (vec2 x y)
                    in
                        [ Html.onClick (config.updatePoint id point)
                        , Html.disabled False
                        ]

                _ ->
                    [ Html.disabled True ]
    in
        Html.div (attrs_ ++ attrs) [ Html.text "update" ]


inputX : Config msg -> State -> List (Html.Attribute msg) -> Html msg
inputX config state attrs =
    let
        options =
            Input.Float.defaultOptions (updateX config.stateUpdated state)
    in
        Input.Float.input options attrs state.x


inputY : Config msg -> State -> List (Html.Attribute msg) -> Html msg
inputY config state attrs =
    let
        options =
            Input.Float.defaultOptions (updateY config.stateUpdated state)
    in
        Input.Float.input options attrs state.y



{- events -}


addPoint : Config msg -> State -> Position -> msg
addPoint config state position =
    point state.x state.y (svgToCanvas config.viewPort position)
        |> config.addPoint


updatePoint : Config msg -> State -> Id -> Position -> msg
updatePoint config state id position =
    point state.x state.y (svgToCanvas config.viewPort position)
        |> config.updatePoint id


point : Maybe Float -> Maybe Float -> Position -> Point
point maybeX maybeY p =
    case ( maybeX, maybeY ) of
        ( Just x, Just y ) ->
            absolute (vec2 x y)

        ( Just x, Nothing ) ->
            absolute (vec2 x (toFloat p.y))

        ( Nothing, Just y ) ->
            absolute (vec2 (toFloat p.x) y)

        ( Nothing, Nothing ) ->
            absolute (vec p.x p.y)


updateX : (State -> msg) -> State -> Maybe Float -> msg
updateX callback state newX =
    callback { state | x = newX }


updateY : (State -> msg) -> State -> Maybe Float -> msg
updateY callback state newY =
    callback { state | y = newY }
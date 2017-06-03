module Tools.Common
    exposing
        ( Config
        , WithFocused
        , WithMouse
        , exprInput
        , getPosition
        , selectPoint
        , updateFocused
        , updateMouse
        )

import Dict exposing (Dict)
import Events
import Expr exposing (..)
import Html exposing (Html)
import Html.Attributes as Html
import Html.Events as Html
import Input.Float
import Math.Vector2 exposing (..)
import Svg exposing (Svg)
import Svg.Attributes as Svg
import Svg.Events as Svg
import Svg.Extra as Svg
import Tools.Styles exposing (..)
import Types exposing (..)


type alias WithMouse a =
    { a | mouse : Maybe Position }


type alias WithFocused a =
    { a | focused : Maybe Id }


updateMouse :
    (WithMouse a -> msg)
    -> WithMouse a
    -> ViewPort
    -> Maybe Position
    -> msg
updateMouse callback state viewPort newMouse =
    callback { state | mouse = Maybe.map (svgToCanvas viewPort) newMouse }


updateFocused :
    (WithFocused a -> msg)
    -> WithFocused a
    -> Maybe Id
    -> msg
updateFocused callback state newFocused =
    callback { state | focused = newFocused }


type alias Config state msg =
    { addPoint : Point -> msg
    , updatePoint : Id -> Point -> msg
    , stateUpdated : state -> msg
    , viewPort : ViewPort
    }



{- svgs -}


getPosition :
    Config (WithMouse state) msg
    -> WithMouse state
    -> (Position -> msg)
    -> Svg msg
getPosition config state mouseClicked =
    Svg.rect
        [ Svg.x (toString config.viewPort.x)
        , Svg.y (toString config.viewPort.y)
        , Svg.width (toString config.viewPort.width)
        , Svg.height (toString config.viewPort.height)
        , Svg.fill "transparent"
        , Svg.strokeWidth "0"
        , Events.onClick mouseClicked
        , Events.onMove
            (updateMouse config.stateUpdated state config.viewPort << Just)
        , Svg.onMouseOut
            (updateMouse config.stateUpdated state config.viewPort Nothing)
        ]
        []


selectPoint :
    Config (WithMouse (WithFocused a)) msg
    -> WithMouse (WithFocused a)
    -> PointStore
    -> Dict String E
    -> (Id -> msg)
    -> Svg msg
selectPoint config state store variables callback =
    Svg.g []
        (List.filterMap
            (pointSelector config state store variables callback)
            (Dict.toList store)
        )


pointSelector :
    Config (WithMouse (WithFocused state)) msg
    -> WithMouse (WithFocused state)
    -> PointStore
    -> Dict String E
    -> (Id -> msg)
    -> ( Id, Point )
    -> Maybe (Svg msg)
pointSelector config state store variables callback ( id, point ) =
    let
        draw v =
            Svg.g []
                [ Svg.circle
                    [ Svg.cx (toString (getX v))
                    , Svg.cy (toString (getY v))
                    , Svg.r "5"
                    , Svg.fill "transparent"
                    , Svg.strokeWidth "0"
                    , Svg.onClick (callback id)
                    , Svg.onMouseOver
                        (updateFocused config.stateUpdated state (Just id))
                    , Svg.onMouseOut
                        (updateFocused config.stateUpdated state Nothing)
                    ]
                    []
                , if id |> equals state.focused then
                    Svg.drawSelector v
                  else
                    Svg.g [] []
                ]
    in
    position store variables point
        |> Maybe.map draw



{- views -}


exprInput : String -> Maybe E -> (String -> msg) -> Html msg
exprInput name e callback =
    let
        row attrs nodes =
            Html.div ([ class [ Row ] ] ++ attrs) nodes

        cell attrs nodes =
            Html.div ([ class [ Column ] ] ++ attrs) nodes

        icon name =
            cell []
                [ Html.div
                    [ class [ IconButton ] ]
                    [ Html.i
                        [ Html.class "material-icons"
                        , Html.onClick (callback "")
                        , class [ Icon ]
                        ]
                        [ Html.text name ]
                    ]
                ]

        input =
            Html.input
                [ Html.onInput callback
                , class [ Textfield ]
                ]
                []
    in
    row []
        [ cell []
            [ Html.div
                [ class [ VariableName ] ]
                [ Html.text (name ++ " =") ]
            , input
            ]
        , icon "delete"
        ]

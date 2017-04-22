module Types
    exposing
        ( Position
        , toVec
        , Point
        , Ratio
        , absolute
        , PointStore
        , Id
        , emptyStore
        , firstId
        , position
        )

import Dict exposing (Dict)
import Math.Vector2 exposing (..)


type alias Position =
    { x : Int
    , y : Int
    }


toVec : Position -> Vec2
toVec p =
    vec2 (toFloat p.x) (toFloat p.y)



{- point -}


type Point
    = Absolute Vec2
    | Relative Id Vec2
    | Between Id Id Ratio


type alias Ratio =
    Float


absolute : Vec2 -> Point
absolute =
    Absolute



{- point store -}


type alias PointStore =
    Dict Id Point


type alias Id =
    Int


emptyStore : PointStore
emptyStore =
    Dict.empty


firstId : Id
firstId =
    0



{- helpers -}


position : PointStore -> Point -> Maybe Vec2
position store point =
    let
        lookUp id =
            Dict.get id store
                |> Maybe.andThen (position store)
    in
        case point of
            Absolute v ->
                Just v

            Relative id v ->
                Maybe.map
                    (add v)
                    (lookUp id)

            Between idA idB ratio ->
                Maybe.map2
                    (\v w -> sub w v |> scale ratio |> add w)
                    (lookUp idA)
                    (lookUp idB)
module App exposing (main)

import Html exposing (Html)


{- internal -}

import Editor
    exposing
        ( Model
        , Msg
        , init
        , update
        , subscriptions
        )
import View exposing (view)


main : Program Never Model Msg
main =
    Html.program
        { init = init
        , update = update
        , subscriptions = subscriptions
        , view = view
        }
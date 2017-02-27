module Vim exposing (..)

import Agenda exposing (..)


{-
   q

   wq

   a

   i
-}


type Action
    = NoOp
    | Quit
    | WriteQuit
    | WriteAll


qTool : Agenda Char Action
qTool =
    cmd <|
        try "q" <|
            (\c ->
                if c == 'q' then
                    Just (succeed Quit)
                else
                    Nothing
            )


q : Agenda Char Action
q =
    try "q" <|
        (\c ->
            if c == 'q' then
                Just (succeed Quit)
            else
                Nothing
        )


wq : Agenda Char Action
wq =
    succeed (\_ result -> result)
        |= try "w"
            (\c ->
                if c == 'w' then
                    Just (succeed NoOp)
                else
                    Nothing
            )
        |= try "q"
            (\c ->
                if c == 'q' then
                    Just (succeed WriteQuit)
                else
                    Nothing
            )


tryChar : Char -> Action -> Agenda Char Action
tryChar char action =
    try (toString char)
        (\c ->
            if c == char then
                Just (succeed action)
            else
                Nothing
        )


wall : Agenda Char Action
wall =
    succeed (\_ _ _ result -> result)
        |= tryChar 'w' NoOp
        |= tryChar 'a' NoOp
        |= tryChar 'l' NoOp
        |= tryChar 'l' WriteAll


all : Agenda Char Action
all =
    oneOf [ q, wq, q, wall ]


wqTool : Agenda Char Action
wqTool =
    cmd <| wq


cmd : Agenda Char Action -> Agenda Char Action
cmd agenda =
    succeed (\_ result -> result)
        |= colon
        |= agenda


colon : Agenda Char Action
colon =
    try ":"
        (\c ->
            if c == ':' then
                Just (succeed NoOp)
            else
                Nothing
        )

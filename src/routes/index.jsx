import React, { lazy, Suspense } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../pages/Home"
const Watch = lazy(() => import("../pages/Watch"));
const Sing = lazy(() => import("../pages/Sing"));
const Me = lazy(() => import("../pages/Me"));
const Search = lazy(() => import("../pages/Search"));
const Rank = lazy(() => import("../pages/Rank"))
const PlayList = lazy(() => import("../pages/Playlist"))
const Vedio = lazy(() => import("../pages/Vedio"))
const Rock = lazy(() => import("../pages/Rock"))

export default function RoutesConfig() {
  return (
    <Suspense fallback={<div>loading...</div>}>
      <Routes>
        <Route path='/' element={<Navigate to="/home" replace={true} />}></Route>
        {/* <Route path='*' element={<Navigate to="/home" replace={true} />}></Route> */}
        <Route path="/home" element={<Home />}></Route>
        <Route path="/watch" element={<Watch />}></Route>
        <Route path="/sing" element={<Sing />}></Route>
        <Route path="/me" element={<Me />}></Route>
        <Route path="/playlist" element={<PlayList />}></Route>
        <Route path="/vedio" element={<Vedio />}></Route>
        <Route path="/Rock" element={<Rock />}></Route>
        <Route path="/search" element={<Search />}></Route>
        <Route path="/rank" element={<Rank />}>
          <Route path="/rank/:id" ></Route>
        </Route>
      </Routes>
    </Suspense>
  )
}

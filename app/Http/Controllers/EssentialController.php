<?php

namespace App\Http\Controllers;

use App\Essential;
use Illuminate\Http\Request;

class EssentialController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $essential = Essential::all();
        return response()->json($essential);

    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        if ($request->hasFile('image')) {
            $uniqueid = uniqid();
            $original_name = $request->file('image')->getClientOriginalName();
            $size = $request->file('image')->getSize();
            $extension = $request->file('image')->getClientOriginalExtension();

            $name = $uniqueid . '.' . $extension;
            $path = $request->file('image')->storeAs('public/uploads', $name);

        }
        $essential = new Essential;
        $essential->title = $request->title;

        $essential->image = $name;

        $essential->save();
        return response()->json($essential);

    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}

<?php

namespace App\Http\Controllers;

use App\Diaries;
use Illuminate\Http\Request;

class DiariesController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $diaries = Diaries::all();
        return response()->json($diaries);

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
        $diaries = new Diaries;
        $diaries->title = $request->title;
        $diaries->description = $request->description;

        $diaries->image = $name;

        $diaries->save();
        return response()->json($diaries);

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

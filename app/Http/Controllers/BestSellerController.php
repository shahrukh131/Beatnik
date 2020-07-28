<?php

namespace App\Http\Controllers;

use App\Bestseller;
use Illuminate\Http\Request;

class BestSellerController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $bestseller = Bestseller::all();
        return response()->json($bestseller);

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

        $bestseller = new Bestseller;
        $bestseller->brand = $request->brand;
        $bestseller->description = $request->description;
        $bestseller->price = $request->price;
        $bestseller->image = $name;

        $bestseller->save();
        return response()->json($bestseller);

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

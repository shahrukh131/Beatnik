<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Bestseller extends Model
{
    protected $fillable = ['brand', 'description', 'image', 'price'];
}

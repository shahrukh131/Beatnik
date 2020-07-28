<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Diaries extends Model
{
    protected $fillable = ['title', 'description', 'image'];
}

<?php

namespace App\Http\Controllers;

use App\Models\Advert;
use Illuminate\Http\Request;

class AdvertController extends Controller
{
    public function store()
    {
        $this->validate(request(), [
            'user_id' => 'required',
            'title' => 'required',
            'description' => 'required',
            'city' => 'required',
            'county' => 'required',
            'console_type' => 'required',
            'advert_type' => 'required',
            'price' => 'required',
            'shipping' => 'required',
            'condition' => 'required',
        ]);

        if($advert = Advert::create(request([
            'user_id',
            'title',
            'description',
            'city',
            'county',
            'image',
            'console_type',
            'advert_type',
            'price',
            'shipping',
            'condition',
            'shelfed',
            ]))){
            return response($advert, 200);
        }else{
            return response('Something went wrong!');
        }
    }
}

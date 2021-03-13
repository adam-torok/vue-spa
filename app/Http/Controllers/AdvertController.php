<?php

namespace App\Http\Controllers;

use App\Models\Advert;
use Illuminate\Http\Request;
use App\Traits\UploadTrait;
use Illuminate\Support\Facades\Storage;

class AdvertController extends Controller
{
    use UploadTrait;
    
    public function store(Request $request)
    {
        
        $data = $request->validate([
            'user_id' => ['required'],
            'title' => ['required', 'string'],
            'description' => ['required', 'string'],
            'city' => ['required', 'string'],
            'county' => ['required', 'string'],
            'console_type' => ['required'],
            'advert_type' => ['required'],
            'price' => ['required'],
            'shipping' => ['required'],
            'condition' => ['required'],
        ]);


        if ($request->hasFile('image')) {
            $advert_image = $request->file('image');
            $folder = '/uploads/images/advert_images/';
            $advert_image_name = $request->title . '_' . time();
            $file_path = $folder . $advert_image_name . '.' . $advert_image->getClientOriginalExtension();
            $this->uploadImage($advert_image, $folder, 'public', $advert_image_name);
            $data['image_name'] = $file_path;
        }  

          Advert::create([
                'user_id' => $request->user_id,
                'title' => $request->title,
                'description' => $request->description,
                'city' => $request->city,
                'county' => $request->county,
                'image_name' => isset($file_path) ? $file_path : '/uploads/images/advert_images/base_image.png',
                'console_type' => $request->console_type,
                'advert_type' => $request->advert_type,
                'price' => $request->price,
                'shipping' => $request->shipping,
                'package' => $request->package,
                'condition' => $request->condition
        ]);
        
        /*if(Advert::create($data)){
            return response(200);
        }
        else{
            return response('Something went wrong!');
        }

        */
    }

    public function index(){
        return Advert::all();
    }

    public function show($id)
    {
       $advert = Advert::findOrFail($id);

       if($advert){
           return response($advert);
       }
    }
}

<?php

namespace App\Http\Controllers;

use App\Models\User;
use App\Traits\UploadTrait;
use Illuminate\Http\Request;

class ProfileController extends Controller
{
    use UploadTrait;

    // TODO MAKE IT WORK
    public function update(Request $request)
    {

         if ($request->hasFile('profile_picture')) {
            $profile_picture = $request->file('profile_picture');
            $folder = '/uploads/images/profile_images/';
            $profile_picture_name = time();
            $file_path = $folder . $profile_picture_name . '.' . $profile_picture->getClientOriginalExtension();
            $this->uploadImage($profile_picture, $folder, 'public', $profile_picture_name);
        }  

        $id = $request->id;
        if($id){
            $bio = $request->bio;
            $web = $request->web;
            $city = $request->city;
            $public_email = $request->public_email;
            $user = User::findOrfail($id);
            $user->profile_picture = isset($file_path) ? $file_path : '/uploads/images/profile_images/base_profile.jpg';
            $user->webpage = $web;
            $user->bio = $bio;
            $user->city = $city;
            $user->public_email = $public_email;
            $user->save();
            
            return response($user, 200);

        }else{
            return response('Something went wrong!');

        }
        
    
    }
}

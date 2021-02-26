<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;

class ProfileController extends Controller
{
    public function update(Request $request)
    {
        $id = $request->id;
        if($id){
            $bio = $request->bio;
            $web = $request->web;
            $city = $request->city;
            $public_email = $request->public_email;
            $user = User::findOrfail($id);

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

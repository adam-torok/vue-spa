<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;

class RegistrateController extends Controller
{
    public function store()
    {
        $this->validate(request(), [
            'name' => 'required',
            'email' => 'required|email',
            'password' => 'required'
        ]);
        
        if($user = User::create(request(['name', 'email', 'password']))){
            return response($user, 200);
        }else{
            return response('Something went wrong!');
        }
    }
}

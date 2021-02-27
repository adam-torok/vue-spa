<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Advert extends Model
{
    use HasFactory;

     protected $fillable = [
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
    ];

    
}

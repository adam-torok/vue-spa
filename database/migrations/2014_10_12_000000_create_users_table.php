<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateUsersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('users', function (Blueprint $table) {
            $table->id();
            $table->string('username');
            $table->string('full_name');
            $table->string('email')->unique();
            $table->string('public_email')->unique()->nullable();
            $table->string('city')->nullable();;
            $table->string('password');

            $table->string('bio')->nullable();
            $table->string('phone_number')->nullable();
            $table->string('webpage')->nullable();
            $table->string('twitter')->nullable();
            $table->string('facebook')->nullable();
            $table->string('skype')->nullable();

            $table->string('profile_picture')->nullable()->default('/uploads/images/profile_images/base_profile.jpg');
            $table->string('profile_cover')->nullable()->default('/uploads/images/profile_images/base_cover.jpg');
            $table->timestamp('email_verified_at')->nullable();
            $table->rememberToken();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('users');
    }
}

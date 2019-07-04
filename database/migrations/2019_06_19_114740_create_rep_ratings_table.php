<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateRepRatingsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('rep_ratings', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('content');
            $table->string('image')->default(0);
            $table->unsignedBigInteger('RatingId');
            $table->foreign('RatingId')->references('id')->on('ratings')->onDelete('cascade');
            $table->unsignedBigInteger('UserId');
            $table->foreign('UserId')->references('id')->on('users')->onDelete('cascade');
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
        Schema::dropIfExists('rep_ratings');
    }
}

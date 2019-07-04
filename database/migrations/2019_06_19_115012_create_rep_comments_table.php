<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateRepCommentsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('rep_comments', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->text('content');
            $table->string('image')->default(0);
            $table->unsignedBigInteger('CommentId');
            $table->foreign('CommentId')->references('id')->on('comments')->onDelete('cascade');
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
        Schema::dropIfExists('rep_comments');
    }
}

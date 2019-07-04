<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateCustomersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('customers', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('name');
            $table->string('email');
            $table->string('address');
            $table->string('note');
            $table->integer('gender');
            $table->integer('phone');
            $table->unsignedBigInteger('UserIdBuyer');
            $table->foreign('UserIdBuyer')->references('id')->on('users')->onDelete('cascade');
            $table->unsignedBigInteger('UserIdSaler');
            $table->foreign('UserIdSaler')->references('id')->on('users')->onDelete('cascade');
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
        Schema::dropIfExists('customers');
    }
}

<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateBillsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('bills', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('name');
            $table->integer('payment');
            $table->date('date_order');
            $table->text('note');
            $table->integer('sum');
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
        Schema::dropIfExists('bills');
    }
}

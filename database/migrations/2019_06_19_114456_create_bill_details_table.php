<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateBillDetailsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('bill_details', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('name');
            $table->string('content');
            $table->integer('price');
            $table->integer('qty');
            $table->string('image');
            $table->unsignedBigInteger('BillId');
            $table->foreign('BillId')->references('id')->on('bills')->onDelete('cascade');
            $table->unsignedBigInteger('Product_Id');
            $table->foreign('Product_Id')->references('id')->on('products')->onDelete('cascade');
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
        Schema::dropIfExists('bill_details');
    }
}

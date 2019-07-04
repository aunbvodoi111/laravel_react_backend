<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateProductsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('products', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('name');
            $table->string('keyword');
            $table->string('description');
            $table->integer('price');
            $table->integer('discount');
            $table->integer('mass');
            $table->integer('view')->default(0);
            $table->string('khuyenmai');
            $table->integer('qty')->default(0);
            $table->string('image');
            $table->unsignedBigInteger('SubcateId');
            $table->foreign('SubcateId')->references('id')->on('subcates')->onDelete('cascade');
            $table->unsignedBigInteger('UserId');
            $table->foreign('UserId')->references('id')->on('users')->onDelete('cascade');
            $table->unsignedBigInteger('UnitId');
            $table->foreign('UnitId')->references('id')->on('units')->onDelete('cascade');
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
        Schema::dropIfExists('products');
    }
}

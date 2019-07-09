<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
})->middleware('auth');
//cate
Route::post('/add/cate','CateController@addCate');
Route::get('/list/cate','CateController@listCate');
Route::get('/delete/cate/{id}','CateController@deleteCate');
Route::post('/update/cate','CateController@updateCate');
//subcate
Route::post('/add/subcate','SubcateController@addSubcate');
Route::get('/list/subcate','SubcateController@listSubcate');
Route::get('/delete/subcate/{id}','SubcateController@deleteSubcate');
Route::post('/update/subcate','SubcateController@updateSubcate');
//unit
Route::post('/add/unit','UnitController@addUnit');
Route::get('/list/unit','UnitController@listUnit');
Route::get('/delete/unit/{id}','UnitController@deleteUnit');
Route::post('/update/unit','UnitController@updateUnit');
//product
Route::post('/upload','productController@upload');
Route::post('/uploads','productController@uploads');
Route::get('/list/product','productController@listProduct');
Route::post('/add/product','productController@addProduct');
Route::get('/list/data','productController@listData');
Route::get('/delete/unit/{id}','productController@deleteUnit');
Route::post('/update/unit','productController@updateUnit');
//cart
Route::get('/list/cart','CartController@list');
//bill
Route::get('/list/bill','BillController@list');
Route::get('/list/bill/detail/{id}','BillController@orderDetail');
//mail
Route::get('/send','BillController@sendMail');
Route::get('/list/bill/detail/{id}','BillController@orderDetail');

Route::get('/addkhoa',function(){
    Schema::table('customers', function ($table) {
            $table->foreign('UserIdBuyer')->references('id')->on('users')->onDelete('cascade');
            $table->unsignedBigInteger('UserIdBuyer');
    });
});
Route::get('/home', 'HomeController@index')->name('home');
Auth::routes();

Route::get('/{any}', function () {
    return view('welcome');
})->where('any', '.*')->middleware('auth');
<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Bill_detail extends Model
{
    //
    protected $table = "bill_details";
    public function product(){
        return $this->hasOne('App\Product', 'id', 'Product_Id');
    }
    // public function carts_detail();
    // {
    //     return $this->hasMany('App\Cart_detail','UserIdSaler','UserIdSaler');
    // }
    // public function user(){
    //     return $this->belongsTo('App\User','UserIdBuyer','id');
    // }
}

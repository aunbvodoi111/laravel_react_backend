<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Cart extends Model
{
    //
    protected $table = "carts";
    public function carts_detail()
    {
        return $this->hasMany('App\Cart_detail','UserIdSaler','UserIdSaler');
    }
    public function user(){
        return $this->belongsTo('App\User','UserIdBuyer','id');
    }

}

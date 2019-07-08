<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Cart_detail extends Model
{
    //
    protected $table = "cart_details"; 
    public function products(){
        return $this->hasOne('App\Product', 'id', 'ProductId');
    }
    public function user(){
        return $this->belongsTo('App\User','id','UserId');
    }
}

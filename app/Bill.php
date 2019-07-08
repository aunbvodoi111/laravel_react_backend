<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Bill extends Model
{
    //
    protected $table = "bills";
    public function bills_detail()
    {
        return $this->hasMany('App\Bill_detail','BillId','id');
    }
    public function user(){
        return $this->belongsTo('App\User','UserIdBuyer','id');
    }
}

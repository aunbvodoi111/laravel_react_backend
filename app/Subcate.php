<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Subcate extends Model
{
    //
    protected $table = 'subcates';
    public function cates()
    {
    	return $this->belongsTo('App\cate','CateId','id');
    }
}

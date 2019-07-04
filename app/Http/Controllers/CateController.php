<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Cate;
class CateController extends Controller
{
    //
    public function addCate (Request $request){
        $request->validate([
            'name' => 'required|min:2',
        ]);
        $cate  = new Cate;
        $cate->name =  $request->name;
        $cate->image =  $request->image;
        $cate->keyword =  changeTitle($request->name);
        $cate->save();
        return response([
    		'cate'=>$cate
    	]);
    }
    public function updateCate (Request $request){
        $request->validate([
            'name' => 'required|min:2',
        ]);
        $cate  = Cate::find($request->id);
        $cate->name =  $request->name;
        $cate->keyword =  changeTitle($request->name);
        $cate->save();
        return response([
    		'cate'=>$cate
    	]);
    }
    public function listCate(){
        $cates  = Cate::all();
        return response([
    		'cates'=>$cates
    	]);
    }
    public function deleteCate( $id ){
        $cate  = Cate::find($id);
        $cate->delete();
        return response([
    		'cate'=>$cate
    	]);
    }

}

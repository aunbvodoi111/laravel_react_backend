<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Cate;
use App\Subcate;
class SubcateController extends Controller
{
    //
    public function addSubcate (Request $request){
        $request->validate([
            'name' => 'required|min:2',
        ]);
        $subcate  = new Subcate;
        $subcate->name =  $request->name;
        $subcate->CateId =  $request->CateId;
        $subcate->keyword =  changeTitle($request->name);
        $subcate->save();
        $subcate = $subcate::with('cates')->first();
        return response([
    		'subcate'=>$subcate
    	]);
    }
    public function updateSubcate (Request $request){
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
    public function listSubcate(){
        $cates  = Cate::all();
        $subcates  = Subcate::with('cates')->get();
        return response([
            'cates' => $cates,
            'subcates' => $subcates
    	]);
    }
    public function deleteSubcate( $id ){
        $subcate  = Subcate::find($id);
        $subcate->delete();
        return response([
    		'subcate' => $subcate
    	]);
    }
}

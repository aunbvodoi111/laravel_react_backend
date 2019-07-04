<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Unit;
class UnitController extends Controller
{
    //
    public function addUnit (Request $request){
        $request->validate([
            'name' => 'required|min:2',
        ]);
        $unit  = new Unit;
        $unit->name =  $request->name;
        $unit->save();
        return response([
    		'unit'=>$unit
    	]);
    }
    public function updateUnit (Request $request){
        $request->validate([
            'name' => 'required|min:2',
        ]);
        $unit  = Unit::find($request->id);
        $unit->name =  $request->name;
        $unit->save();
        return response([
    		'unit'=>$unit
    	]);
    }
    public function listUnit(){
        $units  = Unit::all();
        return response([
    		'units'=>$units
    	]);
    }
    public function deleteUnit( $id ){
        $unit  = Unit::find($id);
        $unit->delete();
        return response([
    		'unit'=>$unit
    	]);
    }

}

<?php
namespace App\Http\Controllers;
use Illuminate\Http\Request;
use App\Cate;
use App\Subcate;
use App\Product;
use App\Unit;
use App\User;
use App\Cart;
use App\Cart_detail;
use Illuminate\Support\Facades\Auth;
class productController extends Controller
{
    //
    public function addProduct (Request $request){
        $request->validate([
            'name' => 'required|min:2',
        ]);
        $subcate  = new Product;
        $subcate->name =  $request->name;
        $subcate->description =  $request->description;
        $subcate->price =  $request->price;
        $subcate->mass =  $request->mass;
        $subcate->discount =  $request->discount;
        $subcate->khuyenmai =  'dsadasasd';
        $subcate->qty =  $request->qty;
        $subcate->image =  $request->image;
        $subcate->SubcateId =  $request->SubcateId;
        $subcate->UserId =  Auth::user()->id;
        $subcate->UnitId =  $request->UnitId;
        $subcate->keyword =  changeTitle($request->name);
        $subcate->save();
        return response([
    		'subcate'=>$subcate
    	]);
    }
    public function upload(Request $res){
        $file=$res->file;
		$name= $file->getClientOriginalName();
		$file->move("img",$name); 
		return response([
            'result' => $name
        ], 200);
    }
    public function uploads(Request $res){
        // dd($res->file);
        
        if ($res->get('file')) {
            foreach ($res->get('file') as $file) {
                dd($file);
                $name= $file->getClientOriginalName();
                $file->move("img",$name); 
                return response([
                    'result' => $name
                ], 200);
            }
        }
		
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
    public function listData(){
        $cates  = Cate::all();
        $subcates  = Subcate::all();
        $units = Unit::all();
        return response([
            'cates' => $cates,
            'subcates' => $subcates,
            'units' => $units
    	]);
    }
    public function listProduct(){
        $products  = Product::all();

          return response([
            'products' => $products,
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
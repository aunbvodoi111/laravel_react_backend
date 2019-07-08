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
class CartController extends Controller
{
    //
    public function list(){
       
    $auth = Auth::User();
    $cart = Cart::where('UserIdSaler', $auth->id)->take(1)->first();
    $idCart = $cart->UserIdSaler;
    // if (Auth::check()) {
    //     dd(Auth::user());
    // }
    // $users = Cart::with(['carts_detail' => function ($query) {
    //     // $idCart = $cart->UserIdSaler;
    //     $query->where('UserIdSaler', 1)::with('products');
    // }])->get();
    $orders = Cart::with('user')->with('carts_detail.products')->where('UserIdSaler', $idCart)->first();
    return response([
        'orders'=>$orders
    ]);
    }
    
}
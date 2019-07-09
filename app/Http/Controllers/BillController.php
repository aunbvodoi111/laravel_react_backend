<?php
namespace App\Http\Controllers;
use Illuminate\Http\Request;
use App\Cate;
use App\Subcate;
use App\Product;
use App\Unit;
use App\User;
use App\Bill;
use App\Bill_detail;
use Illuminate\Support\Facades\Auth;
use Mail; 
class BillController extends Controller
{
    //
    public function list(){
       
        $auth = Auth::User();
        $orders = Bill::where('UserIdSaler', $auth->id)->with('bills_detail.product')->with('user')->get();
        // $idCart = $cart->UserIdSaler;
        // if (Auth::check()) {
        //     dd(Auth::user());
        // }
        // $users = Cart::with(['carts_detail' => function ($query) {
        //     // $idCart = $cart->UserIdSaler;
        //     $query->where('UserIdSaler', 1)::with('products');
        // }])->get();
        // $orders = Cart::with('user')->with('carts_detail.products')->where('UserIdSaler', $idCart)->first();
        return response([
            'orders'=>$orders
        ]);
    }
    public function orderDetail($id){
        $ordersDetail = Bill::where('id', $id)->with('bills_detail.product')->with('user')->first();
        return response([
            'ordersDetail'=>$ordersDetail
        ]);
    }
    public function sendMail(){
        $data=
            [
                'name'=>'name',
                'date_order'=>'name',
                'sum'=>'name',
                
            ];
        Mail::send('mail.mail',$data,function($message) use($data){
            $message->from('phamquycntta@gmail.com','anhquy');
            $message->to('phamqucntta11@gmail.com');
            $message->subject('ok');
            });
            return response([
                'data' => $data
            ]);
    }
}
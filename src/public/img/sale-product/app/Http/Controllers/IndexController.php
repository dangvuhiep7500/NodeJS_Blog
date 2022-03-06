<?php

namespace App\Http\Controllers;
use App\Models\product;

use Illuminate\Http\Request;

use DB;
use App\Http\Requests;
use App\Http\Controllers\Controller;
    
    class IndexController extends Controller{
    public function index(){
    $products = DB::select('select * from product');
    return view('index',['products'=>$products]);
    }
    public function create(Request $request)
        {
            return view('post');
        }
        public function store(Request $request)
        {
       
    $product= new product();
        $product->name= $request['name'];
        $product->price= $request['price'];
    // add other fields
    $product->save();
        return redirect('/product');
    }
        }
    

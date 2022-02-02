<?php

namespace App\Http\Controllers;
use App\Models\User;
use Illuminate\Http\Request;
use App\Mail\ResetPasswordMail;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Response;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Carbon;
class ResetPasswordController extends Controller
{
    public function sendPasswordResetLink(Request $request){
         if($this->ValidateEmail($request->email)){
             return $this->failedResponse();
         }
         $this->send($request->email);
         return $this->successResponse();
    }


    public function send($email){
        $token = $this->createToken($email);
        Mail::to($email)->send(new ResetPasswordMail($token));
    }
    public function createToken($email){

      $oldToken = DB::table('CreatePasswordResetsTable')->where('email',$email)->first();

      if ($oldToken){
          return $oldToken;
      }
      $token = Str::random(60);
      $this->saveToken($token,$email);
      return $token;
    }

    public function saveToken($token,$email){
        DB::table('CreatePasswordResetsTable')->insert([
           'email'=>$email,
           'token'=>$token,
           'created_at'=>Carbon::now()
        ]);
      }

    public function ValidateEmail($email){
       return !User::where('email',$email)->first();
    }

    public function failedResponse(){
       return  response()->json([
           'error'=>'Email dons\'t found on our DB'
       ],404);
    }


    public function successResponse(){
        return  response()->json([
            'error'=>'Email Send Successfully Please check you inbox.'
        ],200);
     }
}

<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Requests\ChangePasswordRequest;
use App\Models\User;
class ChangePasswordController extends Controller
{
   public function ChangePassword(ChangePasswordRequest $request){
      return $this->getPasswordResetTableRow()->count()> 0? $this->changePasswod($request) : $this->tokenNotFoundResponse();
   }


   private function getPasswordResetTableRow($request){
    return DB::table('CreatePasswordResetsTable')->where(['email'=>$request->email,'token'=>$request->resetToken]);
   }


   public function changePasswod($request){
      $user = User::whereEmail($request->email)->first();
      return $user;
   }


   public function tokenNotFoundResponse(){
     return response()->json([
         'error'=>'Token or Email is incorrect!'
     ],422);
}
}

<?php

namespace App\Http\Requests;

use Illuminate\Contracts\Validation\Validator;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Http\Exceptions\HttpResponseException;

class ProfileRequest extends FormRequest
{
    public function authorize(): bool
    {
        return true;
    }

    public function rules(): array
    {
        $isCreateRoute = $this->is('azlam/profile/create');

        return [
            'vision'    => 'required',
            'mission'   => 'required',
            'vision2'   => 'required',
            'mission2'  => 'required',
            'history'   => 'required',
            'structure' => [
                $isCreateRoute ? 'required' : 'nullable',
                'mimes:jpeg,png,jpg,gif,svg',
                'max:2048'
            ],
        ];
    }


    protected function failedValidation(Validator $validator)
    {
        throw new HttpResponseException(response()->json([
            'code'    => 422,
            'message' => 'Cek your validation',
            'data'    => $validator->errors()
        ], 422));
    }
}

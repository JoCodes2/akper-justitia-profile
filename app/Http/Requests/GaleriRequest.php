<?php

namespace App\Http\Requests;

use Illuminate\Contracts\Validation\Validator;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Http\Exceptions\HttpResponseException;

class GaleriRequest extends FormRequest
{
    public function authorize(): bool
    {
        return true;
    }

    public function rules(): array
    {
        $isCreateRoute = $this->is('justitia/galeri/create');

        return [
            'name'    => 'required',
            'image' => [
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

<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Contracts\Validation\Validator;
use Illuminate\Http\Exceptions\HttpResponseException;

class NewsRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    public function rules(): array
    {
        $isCreateRoute = $this->is('justitia/news/create');

        return [
            'title'    => 'required',
            'description'   => 'required',
            'category'   => 'required',
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

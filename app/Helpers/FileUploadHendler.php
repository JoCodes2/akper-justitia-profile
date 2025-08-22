<?php

namespace App\Helpers;

use Illuminate\Support\Str;

class FileUploadHendler
{
    public static function uploadFile($file, $path, $filename)
    {
        $fileName = $filename . Str::random(5) . '.' . $file->getClientOriginalExtension();
        $file->move(public_path($path), $fileName);
        return $fileName;
    }

    public static function updateFile($file, $path, $filename, $oldFile)
    {
        $fileName = $filename . Str::random(5) . '.' . $file->getClientOriginalExtension();
        $file->move(public_path($path), $fileName);
        $old_file = public_path($path) . '/' . $oldFile;
        if (file_exists($old_file)) {
            unlink($old_file);
        }
        return $fileName;
    }

    public static function deleteFile($path, $fileName)
    {
        $filePath = public_path($path) . '/' . $fileName;
        if (file_exists($filePath)) {
            unlink($filePath);
            return true;
        }
        return false;
    }
}

@props([
    'modalId',
    'modalTitle',
    'size',
    'position' => 'center', // center | top
])

@php
    $sizeClasses = [
        'sm'    => 'max-w-sm',
        'md'    => 'max-w-md',
        'lg'    => 'max-w-lg',
        'xl'    => 'max-w-xl',
        '2xl'   => 'max-w-2xl',
        '3xl'   => 'max-w-3xl',
        '4xl'   => 'max-w-4xl',
        '5xl'   => 'max-w-5xl',
        '6xl'   => 'max-w-6xl',
        '7xl'   => 'max-w-7xl',
        'full'  => 'max-w-full',
    ];

    $maxWidth = $sizeClasses[$size] ?? 'max-w-md';

    $positionClass = $position === 'top'
        ? 'items-start pt-10'
        : 'items-center';
@endphp

<div id="{{ $modalId }}"
    class="hidden fixed inset-0 z-50 {{ $positionClass }} justify-center bg-black bg-opacity-50 backdrop-blur-sm overflow-y-auto">

   <div class="relative bg-white rounded-xl shadow-2xl w-full {{ $maxWidth }} mx-4 my-6 transition-all duration-300 ease-out">
        <!-- Header -->
        <div class="flex justify-between items-center p-5 border-b border-gray-200">
            <h3 class="text-xl font-semibold text-gray-800">{{ $modalTitle }}</h3>
            <button data-close-modal="#{{ $modalId }}" class="text-gray-400 hover:text-gray-600 transition">
                <i class="fas fa-times text-lg"></i>
            </button>
        </div>

        <!-- Body -->
        <div class="p-6 space-y-4 max-h-full ">
            {{ $slot }}
        </div>
    </div>
</div>


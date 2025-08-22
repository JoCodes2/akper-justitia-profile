@props([
    'initId' => 'baseTable',
    'search' => true,
    'perPage' => true,
    'pagination' => true,
    'perPageOptions' => [10, 25, 50, 100],
    'searchPlaceholder' => 'Search...'
])

<div class="bg-white rounded-lg shadow-md overflow-hidden border border-gray-100">
    <!-- Header with search and perpage -->
    @if($search || $perPage)
    <div class="px-6 py-4 border-b border-gray-200 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        @if($search)
        <div class="w-full sm:w-auto">
            <div class="relative">
                <input
                    type="text"
                    id="{{ $initId }}_search"
                    placeholder="{{ $searchPlaceholder }}"
                    class="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary transition focus:outline-none focus:border-primary"
                >
                <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <i class="fas fa-search text-gray-400"></i>
                </div>
            </div>
        </div>
        @endif

        @if($perPage)
        <div class="w-full sm:w-auto flex items-center gap-2">
            <label for="{{ $initId }}_perpage" class="text-sm text-gray-600">Per page:</label>
            <select
                id="{{ $initId }}_perpage"
                class="border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-primary  transition focus:outline-none focus:border-primary"
            >
                @foreach($perPageOptions as $option)
                    <option value="{{ $option }}">{{ $option }}</option>
                @endforeach
            </select>
        </div>
        @endif
    </div>
    @endif

    <!-- Table Content -->
    <div class="p-6">
        <div class="overflow-x-auto">
            <div class="inline-block min-w-full align-middle">
                <div class="overflow-hidden">
                    <table id="{{ $initId }}" class="min-w-full divide-y divide-gray-200">
                        <thead class="bg-primary text-white font-heading">
                            {{ $thead }}
                        </thead>
                        <tbody class="divide-y divide-gray-200 bg-white">
                           {{ $tbody }}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>

    <!-- Pagination -->
    @if($pagination)
    <div class="px-6 py-4 border-t border-gray-200 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div class="text-sm text-gray-600">
            Showing <span id="{{ $initId }}_start">1</span> to <span id="{{ $initId }}_end">10</span> of <span id="{{ $initId }}_total">100</span> entries
        </div>
        <div class="flex gap-1">
            <button id="{{ $initId }}_prev" class="px-3 py-1 border border-gray-300 rounded hover:bg-primary hover:text-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed" disabled>
                Previous
            </button>
            <div class="flex gap-1" id="{{ $initId }}_pagination_numbers">
                <!-- Pagination numbers will be inserted here by JavaScript -->
            </div>
            <button id="{{ $initId }}_next" class="px-3 py-1 border border-gray-300 rounded hover:bg-primary hover:text-white transition-colors">
                Next
            </button>
        </div>
    </div>
    @endif
</div>

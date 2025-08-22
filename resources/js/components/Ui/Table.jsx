import React, { useState, useMemo } from "react";
import Button from "./Button.jsx";

const Table = ({ columns, data }) => {
    const [searchTerm, setSearchTerm] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const [pageSize, setPageSize] = useState(10);

    const filteredData = useMemo(() => {
        return data.filter((row) =>
            Object.values(row).some((value) =>
                String(value).toLowerCase().includes(searchTerm.toLowerCase())
            )
        );
    }, [searchTerm, data]);

    const totalPages = Math.ceil(filteredData.length / pageSize);

    const currentData = useMemo(() => {
        const start = (currentPage - 1) * pageSize;
        return filteredData.slice(start, start + pageSize);
    }, [filteredData, currentPage, pageSize]);

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
        setCurrentPage(1);
    };

    const handlePageSizeChange = (e) => {
        setPageSize(Number(e.target.value));
        setCurrentPage(1);
    };

    const goToPage = (page) => {
        if (page >= 1 && page <= totalPages) {
            setCurrentPage(page);
        }
    };

    return (
        <div className="space-y-4 w-full">
            {/* Top Controls */}
            <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-3">
                {/* Left: Page Size Selector */}
                <div className="flex items-center gap-2 text-sm">
                    <label htmlFor="pageSize" className="whitespace-nowrap">
                        Tampilkan
                    </label>
                    <select
                        id="pageSize"
                        value={pageSize}
                        onChange={handlePageSizeChange}
                        className="border border-gray-300 rounded-md px-2 py-1"
                    >
                        {[5, 10, 20, 50, 100].map((size) => (
                            <option key={size} value={size}>
                                {size}
                            </option>
                        ))}
                    </select>
                    <span>data</span>
                </div>

                {/* Right: Search */}
                <div className="w-full sm:w-64">
                    <input
                        type="text"
                        placeholder="Cari..."
                        value={searchTerm}
                        onChange={handleSearchChange}
                        className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-primary focus:outline-none"
                    />
                </div>
            </div>

            {/* Table */}
            <div className="overflow-x-auto">
                <table className="min-w-[900px] w-full text-sm text-left border border-gray-200">
                    <thead className="bg-primary text-white text-xs sm:text-sm">
                        <tr>
                            {columns.map((col) => (
                                <th
                                    key={col.accessor}
                                    className="px-4 py-2 whitespace-nowrap"
                                >
                                    {col.label}
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody className="text-xs sm:text-sm">
                        {currentData.length === 0 ? (
                            <tr>
                                <td
                                    colSpan={columns.length}
                                    className="text-center py-6 text-gray-500"
                                >
                                    Data tidak ditemukan
                                </td>
                            </tr>
                        ) : (
                            currentData.map((row, rowIndex) => (
                                <tr
                                    key={rowIndex}
                                    className={
                                        rowIndex % 2 === 0
                                            ? "bg-white"
                                            : "bg-gray-50"
                                    }
                                >
                                    {columns.map((col) => (
                                        <td
                                            key={col.accessor}
                                            className="px-4 py-2 whitespace-nowrap"
                                        >
                                            {col.render
                                                ? col.render(row)
                                                : row[col.accessor]}
                                        </td>
                                    ))}
                                </tr>
                            ))
                        )}
                    </tbody>
                </table>
            </div>

            {/* Pagination Controls */}
            <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-3 mt-2">
                <span className="text-sm text-gray-600">
                    Menampilkan {currentData.length} dari {filteredData.length}{" "}
                    data
                </span>

                <div className="flex items-center gap-2">
                    {/* Tombol Sebelumnya */}
                    <button
                        onClick={() => goToPage(currentPage - 1)}
                        disabled={currentPage === 1}
                        className={`px-3 py-1 rounded-md text-sm font-medium transition ${
                            currentPage === 1
                                ? "bg-gray-300 text-white cursor-not-allowed"
                                : "bg-primary text-white hover:bg-primary/80"
                        }`}
                    >
                        Sebelumnya
                    </button>

                    {/* Nomor Halaman (maks 3) */}
                    {Array.from({ length: 3 }, (_, i) => {
                        let page = currentPage;
                        if (currentPage === 1) page = i + 1;
                        else if (currentPage === totalPages)
                            page = totalPages - 2 + i;
                        else page = currentPage - 1 + i;

                        if (page < 1 || page > totalPages) return null;

                        return (
                            <button
                                key={page}
                                onClick={() => goToPage(page)}
                                className={`w-8 h-8 rounded-full text-sm font-medium flex items-center justify-center transition ${
                                    currentPage === page
                                        ? "bg-primary text-white"
                                        : "bg-gray-200 text-gray-800 hover:bg-gray-300"
                                }`}
                            >
                                {page}
                            </button>
                        );
                    })}

                    {/* Tombol Berikutnya */}
                    <button
                        onClick={() => goToPage(currentPage + 1)}
                        disabled={currentPage === totalPages}
                        className={`px-3 py-1 rounded-md text-sm font-medium transition ${
                            currentPage === totalPages
                                ? "bg-gray-300 text-white cursor-not-allowed"
                                : "bg-primary text-white hover:bg-primary/80"
                        }`}
                    >
                        Berikutnya
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Table;

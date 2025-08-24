import $ from "jquery";
import { apiGet } from "../helper/api";

export default async function dashboardController() {
    try {
        const res = await apiGet(`${appUrl}/justitia/dashboard`);
        const data = res.data?.data || {};

        $("#totalNews").text(data.totalNews ?? 0);

        $("#totalGalery").text(data.totalGalery ?? 0);

        let latestNewsHtml = "";
        if (data.latestNews && data.latestNews.length > 0) {
            data.latestNews.forEach((news) => {
                latestNewsHtml += `
                    <li class="py-3 flex justify-between items-center">
                        <div>
                            <p class="text-gray-800 font-medium">${news.title}</p>
                            <p class="text-sm text-gray-500">${news.date_upload}</p>
                        </div>
                    </li>
                `;
            });
        } else {
            latestNewsHtml = `
                <li class="py-3 text-gray-500 text-sm">Belum ada berita terbaru.</li>
            `;
        }

        $("#latestNews").html(latestNewsHtml);
    } catch (err) {
        console.error("Error load dashboard data:", err);
    }
}

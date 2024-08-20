import moment from "moment";

export class DateUtil {

    public static formatDateSince(d: Date) {
        moment.updateLocale("en", {
            relativeTime: {
                future: "trong %s",
                past: "%s trước",
                s: "1 giây",
                ss: "%s giây",
                m: "1 phút",
                mm: "%d phút",
                h: "1 giờ",
                hh: "%d giờ",
                d: "1 ngày",
                dd: "%d ngày",
                M: "tháng",
                MM: "%d tháng",
                y: "năm",
                yy: "%d năm"
            }
        });
        return moment.utc(d).fromNow();
    }
}
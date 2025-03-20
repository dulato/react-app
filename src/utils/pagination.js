export function getTotalPage(totalCount, limit) {
    return Math.ceil(totalCount / limit);
}   
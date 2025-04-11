export const buildQuery = ({
    search,
}: {
    search?: string;
}): Record<string, any> => {
    const query: Record<string, any> = {};
    console.log(search);

    if (search) {
        const words = search.trim().split(/\s+/);
        console.log(words.join('|'))
        console.log(words)
        query.$or = [
            { title: search },
            { category: search },
            { title: { $regex: words.join('|'), $options: 'i' } },
            { category: { $regex: words.join('|'), $options: 'i' } }
        ];
    }

    return query;
};
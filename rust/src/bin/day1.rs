// fn main() {}

fn main() {
    println!("-- DAY 1 --");
    println!("Part 1: {}", get_max_kcal(1));
    println!("Part 2: {}", get_max_kcal(3))
}

fn get_max_kcal(elves: usize) -> usize {
    let mut _max_kcal: Vec<usize> = include_str!("../../../input/day1")
        .split("\n\n")
        .map(|x| {
            return x.lines().flat_map(str::parse::<usize>).sum();
        })
        .collect();

    _max_kcal.sort_by(|a, b| b.cmp(a));

    _max_kcal.into_iter().take(elves).sum::<usize>()
}

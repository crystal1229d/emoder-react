let optionGroup = [
    /*
    {
        id: Number / 구분값,
        name: String / 옵션그룹명,
        selection: String / multi, single / 다중선택 or 단일선택
        selectableMin: Number / 선택 최소 개수 (0~)
        selectableMax: Number / 선택 최대 개수 (0~)
    }
    */
    {
        id: 0,
        name: 'HOT & ICE',
        selection: 'single',
        selectableMin: 1,
        selectableMax: 1
    },
    {
        id: 1,
        name: 'MILK',
        selection: 'single',
        selectableMin: 1,
        selectableMax: 1
    },
    {
        id: 2,
        name: 'TOPPING',
        selection: 'multi',
        selectableMin: 0,
        selectableMax: 10
    },
    {
        id: 3,
        name: '추가선택',
        selection: 'multi',
        selectableMin: 0,
        selectableMax: 10
    },
]

export { optionGroup }
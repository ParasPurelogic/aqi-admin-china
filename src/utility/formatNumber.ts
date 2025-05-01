const formatNumber = (num: number, region = 'zh-CN'): string => new Intl.NumberFormat(region).format(num);

export default formatNumber
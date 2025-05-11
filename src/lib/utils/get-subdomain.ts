export function getSubdomain(hostname?: string): string | null {
    let currentHostname: string;

    if (typeof window !== 'undefined') {
        currentHostname = hostname || window.location.hostname;
    } else {
        if (!hostname) {
            throw new Error('Hostname must be provided in server environment');
        }
        currentHostname = hostname;
    }

    const cleanHostname = currentHostname.replace('www.', '').split(':')[0];

    const parts = cleanHostname.split('.');

    if (cleanHostname === 'localhost' || /^\d+\.\d+\.\d+\.\d+$/.test(cleanHostname)) {
        return null;
    }

    const secondLevelDomains = ['co', 'com', 'org', 'net', 'gov', 'edu'];
    const isSecondLevelTld = secondLevelDomains.includes(parts[parts.length - 2]);

    if (parts.length > 2) {
        return isSecondLevelTld ? parts[0] : parts.slice(0, -2).join('.');
    }

    return null;
}
